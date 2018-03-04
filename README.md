# gulp-poc
This project is a POC on how to create config file in gulp task based on environment dev or prod. 
In this project there are three types of configurations 
1. Common ( all the properties inside common are common for both dev and prod builds )
2. Development
3. Production
# Build ( What the build command is doing? )
For building the project you can run 
1. gulp build (same as gulp build --env dev)
2. gulp build --env dev
3. gulp build --env prod
Build task takes config.json from src folder and creates a new file by merging all configurations
inside 
1. common object 
2. env specific object (either "dev" or "prod" )
Here I am writing final file as .json
But depending on requirements you can write the same file as js as well by changing the
Params of writeFile.
