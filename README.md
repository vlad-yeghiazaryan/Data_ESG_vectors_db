# Data ESG vectors database
This is a small django project on editing vector images, saving the coordinates in the server and using the data to aid in the training of pdf converter/OCR ML software.

To start go into the main directory `cd Data_ESG_vectors_db-master` and setup the virtual environment: 
````python
virtualenv .
````
Initate the virtual environment with `source bin/activate`.

To setup the app simply run:

````python
pip3 install -r requirements.txt
````

Once you have the libraries installed, to to the src directory `cd src` and run the server with `python3 manage.py runserver`.

##### The steps above will start a Django session. 

------

For editing/adding vectors to the database check out https://exampledomain.com/vector-editor. For managing the databases you can use the  https://exampledomain.com/admin page or just manually connect to the SQLite database. To access all of the vectors simply send a GET request to  https://exampledomain.com/all_vectors (you will receive a json array as a response).

If pressing the send buttion generates the follow error in the browser concole: <span style="color:red">Access to fetch at "url" from origin "Host" has been blocked by CORS policy ...</span>, then make sure to add allowed origins in the **settings.py** file.