

// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method

    // Color add method
    add(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.add: non-color parameter";
            else {
                this.r += c.r; this.g += c.g; this.b += c.b; this.a += c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color add
    
        // Color subtract method
    subtract(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.subtract: non-color parameter";
            else {
                this.r -= c.r; this.g -= c.g; this.b -= c.b; this.a -= c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color subgtract
    
        // Color scale method
    scale(s) {
        try {
            if (typeof(s) !== "number")
                throw "scale factor not a number";
            else {
                this.r *= s; this.g *= s; this.b *= s; this.a *= s; 
                return(this);
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color scale method
    
        // Color copy method
    copy(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.copy: non-color parameter";
            else {
                this.r = c.r; this.g = c.g; this.b = c.b; this.a = c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end Color copy method
    
        // Color clone method
    clone() {
        var newColor = new Color();
        newColor.copy(this);
        return(newColor);
    } // end Color clone method
    
        // translate color to string
    toString() {
        return(this.r +" "+ this.g +" "+ this.b +" "+ this.a);
    }  // end Color toConsole
    
        // Send color to console
    toConsole() {
        console.log(this.toString());
    }  // end Color toConsole

} // end color class

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
}// end drawPixel 

//get the input triangles from the standard class URL
function getInputTriangles() {
    const INPUT_TRIANGLES_URL = 
        "https://ncsucgclass.github.io/prog1/triangles.json";
        
    // load the triangles file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_TRIANGLES_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input triangles file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input triangles

// Vector class
class Vector { 
    constructor(x,y,z) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z; 
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix="") {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static cross method
    static cross(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.cross: non-vector parameter";
            else {
                var crossX = v1.y*v2.z - v1.z*v2.y;
                var crossY = v1.z*v2.x - v1.x*v2.z;
                var crossZ = v1.x*v2.y - v1.y*v2.x;
                return(new Vector(crossX,crossY,crossZ));
            } // endif vector params
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
} // end Vector class

//put random points in the triangles from the class github
function drawRandPixelsInInputTriangles(context) {
    var inputTriangles = getInputTriangles();
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);
    var numScreenPixels = w*h; 
    var num = 0;
    
    
    if (inputTriangles != String.null) { 
        var x = 0; var y = 0; // pixel coord init
        var cx = 0; var cy = 0; // init center x and y coord
        var c = new Color(0,0,0,255); // init the triangle color
        var n = inputTriangles.length; // the number of input files
        //console.log("number of files: " + n);
        var eye = [0.5, 0.5, -0.5];

        // on canvas plane
        for ( var xx = 0; xx <= 512; xx++ ) {
          for ( var yy = 0; yy <= 512; yy++ ) {
            point = [ xx, yy, 0 ]; // on canvas plane
            //ray through the screen pixel
            var ray = [ point[0] - eye[0], point[1] - eye[1], 0 - eye[2] ];
            //console.log("ray " + ray);
            //for each object in the scene
            for (var f=0; f<n; f++) {
              
              var tn = inputTriangles[f].triangles.length;
            
              
            //console.log("number of triangles in this files: " + tn);
              c.change(
                inputTriangles[f].material.diffuse[0]*255,
                inputTriangles[f].material.diffuse[1]*255,
                inputTriangles[f].material.diffuse[2]*255,
                255); // triangle diffuse color
              // Loop over the triangles, draw each in 2d
              for(var i=0; i<tn; i++) {
                //find which three vertices
                var vertex1 = inputTriangles[f].triangles[i][0];
                var vertex2 = inputTriangles[f].triangles[i][1];
                var vertex3 = inputTriangles[f].triangles[i][2];
      

                //get specific vertices values
                var vertexPos1 = inputTriangles[f].vertices[vertex1];
                var vertexPos2 = inputTriangles[f].vertices[vertex2];
                var vertexPos3 = inputTriangles[f].vertices[vertex3];
                

                var v1 = [w*vertexPos1[0], h-h*vertexPos1[1], vertexPos1[2]];
                var v2 = [w*vertexPos2[0], h-h*vertexPos2[1], vertexPos2[2]];
                var v3 = [w*vertexPos3[0], h-h*vertexPos3[1], vertexPos3[2]];
                
                
                //calculate triganle normal
                var BA = new Vector( v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2] );
                //console.log("BA " + BA.x + " " + BA.y + " " + BA.z);

                var CA = new Vector( v1[0] - v3[0], v1[1] - v3[1], v1[2] - v3[2] );
                //triangle normal vector nn
                var triangle_normal = Vector.cross(BA, CA);
                //console.log("triangle_normal " + triangle_normal.x + " " + triangle_normal.y + " " + triangle_normal.z);
                var normal = [triangle_normal.x, triangle_normal.y, triangle_normal.z];
    
                //check if the normal is permendicular to the ray, if not then the ray intersects to the triangle plane
          
              //  if ( N[0]*ray[0] + N[1]*ray[1] + N[2]*ray[2] != 0 ) {
                  
                  var d = normal[0]*v1[0] + normal[1]*v1[1] + normal[2]*v1[2];
                  var NE = normal[0]*eye[0] + normal[1]*eye[1] + normal[2]*eye[2];
                  var ND = normal[0] * (point[0] - eye[0]) + normal[1]*(point[1] - eye[1]) + normal[2]*(0 - eye[2]);
                  t = (d - NE)/ND;
                  //console.log("t " + t);
                  var l = [ eye[0] + t*ray[0], eye[1] + t*ray[1], eye[2] + t*ray[2] ];
 
                  //if l is inside the triangle?
                  var AB = new Vector (v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]);
                 // var AC = new Vector (vertexPos3[0] - vertexPos1[0], vertexPos3[1] - vertexPos1[1], vertexPos3[2] - vertexPos1[2]);
                  var AP = new Vector (l[0] - v1[0], l[1] - v1[1], l[2] - v1[2]);
                  var q1 = Vector.cross(AP, AB);
                  //console.log("q1 " + q1);
                  var r1 = Vector.dot(q1,triangle_normal);
                  //console.log("r1 " + r1);
  
                  var BC = new Vector (v3[0] - v2[0], v3[1] - v2[1], v3[2] - v2[2]);
                 // var BA = new Vector (vertexPos1[0] - vertexPos2[0], vertexPos1[1] - vertexPos2[1], vertexPos1[2] - vertexPos2[2]);
                  var BP = new Vector ( l[0] - v2[0], l[1] - v2[1], l[2] - v2[2]);
                  var q2 = Vector.cross(BP, BC);
                  var r2 = Vector.dot(q2,triangle_normal);
                  //console.log("r2 " + r2);

                  var CA = new Vector (v1[0] - v3[0], v1[1] - v3[1], v1[2] - v3[2]);
                  //var CB = new Vector (vertexPos2[0] - vertexPos3[0], vertexPos2[1] - vertexPos3[1], vertexPos2[2] - vertexPos3[2]);
                  var CP = new Vector (l[0] - v3[0], l[1] - v3[1], l[2] - v3[2]);
                  var q3 = Vector.cross(CP, CA);
                  var r3 = Vector.dot(q3,triangle_normal);
                 // console.log("r3 " + r3);

                  if (( r1 < 0 && r2 < 0 && r3 < 0 ) || (r1 > 0 && r2 > 0 && r3 > 0)) { 

                
                     //plane normal and do normalization                  
                    normalDirection = Vector.normalize(triangle_normal);
                    //console.log(normalDirection);
                     //light direction
                    var lightDirection = new Vector( -3-l[0], 1-l[1], -0.5-l[2]);
                    lightDirection = Vector.normalize(lightDirection);
                    //console.log(lightDirection);
                    //view direction
                    var viewDirection = new Vector( 0.5-l[0], 0.5-l[1], -0.5-l[2] );
                    viewDirection = Vector.normalize(viewDirection);
                    //console.log(viewDirection);
                    //half vector
                    var halfDirection = Vector.add(lightDirection, viewDirection);
                    halfDirection = Vector.normalize(halfDirection);
                    //console.log(halfDirection);
                    
                    var Ka = [inputTriangles[f].material.ambient[0], inputTriangles[f].material.ambient[1], inputTriangles[f].material.ambient[2]];
                    var La = new Color (1,1,1,1);
                    var Kd = [inputTriangles[f].material.diffuse[0], inputTriangles[f].material.diffuse[1], inputTriangles[f].material.diffuse[2]];
                    var Ld = new Color (1,1,1,1);
                    var Ks = [inputTriangles[f].material.specular[0], inputTriangles[f].material.specular[1], inputTriangles[f].material.specular[2]];
                    var Ls = new Color (1,1,1,1);
                    //ambient color
                    var KaLa = [ Ka[0]*La.r,Ka[1]*La.g, Ka[2]*La.b ];


                    //diffusion color
                    var KdLd = [ Kd[0]*Ld.r, Kd[1]*Ld.g, Kd[2]*Ld.b ];

                    //console.log(KdLd);

                    var dif = [ KdLd[0] * Vector.dot(normalDirection, lightDirection), KdLd[1] * Vector.dot(normalDirection, lightDirection), KdLd[2] * Vector.dot(normalDirection, lightDirection) ];
                    
                    //specular color
                    var KsLs = [ Ks[0]*Ls.r, Ks[1]*Ls.g, Ks[2]*Ls.b]; 


                    var s = 1;          

                    var rrr = inputTriangles[f].material.n;
                  
                    
                    for ( var o = 1; o <=rrr; o++ ) {
                      s *= Vector.dot(normalDirection, halfDirection);
                    }
     
                    var spe = [ KsLs[0]*s, KsLs[1]*s, KsLs[2]*s ];

                    var new_color = [ KaLa[0]+dif[0]+spe[0], KaLa[1]+dif[1]+spe[1], KaLa[2]+dif[2]+spe[2] ];
                    //console.log("new_color: " + new_color);
                    c.change(new_color[0]*255, new_color[1]*255, new_color[2]*255, 255); // triangle diffuse color
                    console.log(new_color);
                    drawPixel(imagedata,point[0],point[1],c);      
     
                   
                  }
                
              }
            }
            //light direction
            //console.log("closest_t " + closest_t);
            //console.log("closest_triangle " + closest_triangle);
            //console.log("closest_intersection " + closest_intersection);
            //drawPixel(imagedata, xx, yy,c);
          }
        }
        context.putImageData(imagedata, 0, 0);
    
    }// end up if..
  }// end up the function


  function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    
    //context.fillStyle = "black";
    //context.fillRect(0, 0, canvas.width, canvas.height);

    //drawRandPixels(context);
      // shows how to draw pixels

    
    //drawRandPixelsInInputEllipsoids(context);
      // shows how to draw pixels and read input file
      
    //drawInputEllipsoidsUsingArcs(context);
      // shows how to read input file, but not how to draw pixels
  
    drawRandPixelsInInputTriangles(context);
   //context.translate(0, offsetY);
   //context.scale(1, -1);
    // shows how to draw pixels and read input file

}



