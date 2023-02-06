rm -r ../graal-ssr/src/main/resources/static
rm -r ../graal-ssr/src/main/resources/reactapp
mkdir ..\graal-ssr\src\main\resources\reactapp\js
call yarn build

mv build ../graal-ssr/src/main/resources/static

cp -T ../graal-ssr/src/main/resources/static/index.html ../graal-ssr/src/main/resources/reactapp/index.html
cp -T ../graal-ssr/src/main/resources/static/static/js/main.*.js ../graal-ssr/src/main/resources/reactapp/js/main.js