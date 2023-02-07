package com.dscsag.graalssr.ddd0interface;

import com.oracle.truffle.js.scriptengine.GraalJSScriptEngine;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.java.Log;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.springframework.stereotype.Controller;
import org.springframework.util.StopWatch;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.script.ScriptException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Objects;
import java.util.Scanner;

@Controller
@Log
public class HtmlController {
    String indexHtml;
    String mainJs;
    String textEncoderPolyfill;
    String renderJs;
    GraalJSScriptEngine engine;
    public HtmlController() throws ScriptException {
        indexHtml = readFile("reactapp/index.html");
        mainJs = readFile("reactapp/js/main.js");
        textEncoderPolyfill = readFile("TextEncoderPolyfill.js");

        renderJs = readRenderJs();
        engine = initializeEngine();
    }

    private String readFile(String path){
        StringBuilder bob = new StringBuilder();

        Scanner s = new Scanner(new BufferedReader(new InputStreamReader(ClassLoader.getSystemResourceAsStream(path))));

       while (s.hasNextLine()){
           bob.append(s.nextLine());
           bob.append(System.lineSeparator());
       }
       return bob.toString();
    }

    @ResponseBody
    @GetMapping({"/","/r/**"})
    public String blog(HttpServletRequest request) throws ScriptException {
        engine.eval("window.requestUrl = '" + request.getRequestURI()+"'");
        var html =  engine.eval(renderJs);
        return indexHtml
                .replace("<div id=\"root\"></div>", "<div id=\"root\">%s</div>".formatted(html))
//                .replace("<script defer=\"defer\" type=\"module\">"+readRenderJs()+"</script>","<p>???</p>")
                ;
    }

    @ResponseBody
    @GetMapping("shutdown")
    public String shutdown(){
        System.exit(0);
        return "<b>Shutdown</b>";
    }

    private String readRenderJs(){
        int startIndex = indexHtml.indexOf("<script defer=\"defer\" type=\"module\">")+"<script defer=\"defer\" type=\"module\">".length();
        int endIndex = indexHtml.indexOf("</script>", startIndex);
        return indexHtml.substring(startIndex, endIndex);
    }

    private GraalJSScriptEngine initializeEngine() throws ScriptException {
        var sw = new StopWatch();
        sw.start();

        engine = GraalJSScriptEngine.create(null,
                Context.newBuilder("js")
                        .allowHostAccess(HostAccess.ALL)
                        .allowHostClassLookup(s -> true));

        engine.eval("window = { location: { hostname: 'localhost' } }");
        engine.eval("navigator = {}");
        engine.eval(textEncoderPolyfill);
        engine.eval("window.isServer = true");
        engine.eval(mainJs);


        sw.stop();
        log.info("GraalVM initialized: "+sw.getTotalTimeSeconds());
        return engine;
    }
}
