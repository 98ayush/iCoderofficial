var http=require('http');
var fs=require('fs');
var path=require('path');
http.createServer(function(req,res){
    if(req.url==='/')
    {
        fs.readFile("./public/index.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/iCoder.html')
    {
        fs.readFile("./public/iCoder.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/about.html')
    {
        fs.readFile("./public/about.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/android.html')
    {
        fs.readFile("./public/android.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/contact.html')
    {
        fs.readFile("./public/contact.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/java.html')
    {
        fs.readFile("./public/java.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/privacyterms.html')
    {
        fs.readFile("./public/privacyterms.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/python.html')
    {
        fs.readFile("./public/python.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/web.html')
    {
        fs.readFile("./public/web.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/write.html')
    {
        fs.readFile("./public/write.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url==='/index.html')
    {
        fs.readFile("./public/index.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
        
    }
    else if(req.url.match("\.css$")){
        var cssPath=path.join(__dirname,'public',req.url);
        //console.log(cssPath);
        var fileStream=fs.createReadStream(cssPath,"UTF-8");
        res.writeHead(200,{"Content-Type":"text/css"});
        fileStream.pipe(res);

    }
    else if(req.url.match("\.png$")){
        var imagePath=path.join(__dirname,'public',req.url);
        var fileStream=fs.createReadStream(imagePath);
        res.writeHead(200,{"Content-Type":"image/png"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("No found");
    }
   // console.log(req.url);

}).listen(3000);