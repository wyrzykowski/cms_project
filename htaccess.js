// htaccess module to access file by link friendly name 
var fs = require('fs');
exports.getLink = function (pathF) {

  
    fs.access('.htaccess', fs.constants.F_OK, (err) => {
        if(!err){ 

            fs.readFile('.htaccess', function(err, data) {
            var strData=data.toString('utf8');
            if(strData.lastIndexOf("RewriteEngine on")!=-1)
            {
                console.log(' Rewrite EngineOn');
                if(strData.lastIndexOf("RewriteRule"+pathF)!=-1)
                {
                    console.log(pathF);
                }
            }
            else console.log('Rewrite Engine OFF');
           
            
              });
      
        }
        else{ // if error 
         console.log(".access not found")
         return pathF;
        }
       
    
        });


    console.log("htaccess mdoule working...");
    return pathF;
 
};