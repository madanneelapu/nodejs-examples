Node Pacakge Manager - NPM
--------------------------

How to Create a Node Package?
Go into the app root folder and Run command 'npm init' to create a package.json file.

The 'scripts' object in package.json file contains the scripts that we can run.
Go into the app root folder and Run command 'npm <script-name>' to run the script.
Eg: npm test

How to install other Node Packages into project?
Go into the app root folder and Run command 'npm install <package-name> --save'
to install the package in the project. The '--save' flag adds the dependency to project's
package.json file, in the 'dependencies' object.
All dependencies will be installed in 'appRootFolder/node_modules' folder.


"dependencies": {
    "moment": "^2.20.1" //^ means auto update to new patch and new minor releases
                        //~ means auto update to new patch release
  }


How to install all the dependencies that are mentioned in package.json for a project?
Go into the app root folder and Run command 'npm install'.
This reads the package.json file and downloads all the dependencies and installs in the project.


Sometimes we need some dependencies only at development, but not at production runtime.
How can we specify those?
Go into the app root folder and Run command 'npm install <package-name> --save-dev'.
The '-dev' flag adds the dependency to project's package.json file, in the 'devDependencies' object.

How to update the dependencies?
Go into the app root folder and Run command 'npm update'.
This updates the dependencies based on ^ and ~.

How to install a dependency globally using NPM in Node?
Go into the app root folder and Run command 'npm install -g <package-name>'.
The '-g' flag indicates global install.
Eg: npm install -g nodemon
installs the 'Node Monitor' module.
Most of the time, we can access the global dependencies via command line (Just like we access node itself).
These modules have a folder named 'cli' within them.

Where are node modules installed Globally?
In a Windows machine modules install globally at location:
C:\Users\<UserName>\AppData\Roaming\npm\node_modules

What is nodemon used for?
It is not a Dev Dependency. It is not a production Dependency either.
With nodemod we can monitor the node app for changes. Also called as 'watching'.
Every time we change something in the source file, the nodemod restarts the node app inorder to make the changes effect.
Go into the app root folder and Run command 'nodemon <app.js>'