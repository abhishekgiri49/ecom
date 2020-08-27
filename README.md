 The gameplan:

    Install npm
    Set up node package
    Create the webpack config file
    Set up Babel
    Create React starter
    Compile bundles
    Integrate with Django
    Send Django model data to React

1. Install npm

First, download the LTS version of Node.js

Then open terminal to test that you have Node.js which includes npm.

node -v

The output should match the LTS version number you downloaded.
2. Set up node package

Generate a package.json file: In terminal, go to the root of your project and enter

npm init

Press enter for all the questions, modifying if necessary. It should look something like this:

name: (mysite)
version: (1.0.0)
description: description here
entry point: (index.js)
test command:
git repository: (https://github.com/user/djangoproject.git)
keywords:
author: User <user@gmail.com> (http://user.com)
license: (ISC)
About to write to /Users/tmpvar/djangoproject/package.json:

{
  "name": "mysite",
  "version": "1.0.0",
  "description": "description here",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/user/djangoproject.git"
  },
  "author": "User <user@gmail.com> (http://user.com)",
  "license": "ISC"
}


Is this ok? (yes)

Add the following to your package.json:

"scripts": {
  "build": "webpack --config webpack.config.js --progress --colors --mode development",
  "watch": "webpack --config webpack.config.js --watch --mode development"
},

Install dev dependencies for babel and webpack:

npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react webpack webpack-bundle-tracker webpack-cli

Install react dependencies:

npm install --save react react-dom

3. Create the webpack config file

If you haven’t already, create a js directory wherever you serve your static files. Create an index jsx file as well.

mkdir -p mysite/polls/static/js
touch mysite/polls/static/js/index.js

Create the webpack config file

touch webpack.config.js

Paste the following into webpack.config.js

var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './mysite/polls/static/js/index',

  output: {
      path: path.resolve('./mysite/polls/static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './mysite/webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};

4. Set up Babel

Create a Babel configuration file

touch .babelrc

Paste the following into the file:

{
  "presets": [
    "babel-preset-env",
    "react"
  ]
}

Your project directory should now look something like this, depending on where you are serving your static files.

repodirectory/
├── mysite/ 
│   └── mysite/              # project
│   └── polls/               # app 
│       └── static/ 
│           └── bundles/     # generated by webpack
│           └── js/
│   └── manage.py
│   └── webpack-stats.json   # generated by webpack
├── .babelrc
├── package.json
├── webpack.config.js
├── node_modules/ #contains our JS dependencies

5. Create React starter

Let’s create a “Hello World” example using a code snippet from the reactjs website.

static/js/index.js:

import React from 'react'
import ReactDOM from 'react-dom'


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="world" />;
ReactDOM.render(
  element,
  document.getElementById('react')
);

6. Compile bundles

Let’s create a bundle.

./node_modules/.bin/webpack --config webpack.config.js

Creating a bundle after every change you make to your files gets tedious. Thankfully, because of a command we specified in package.json, we can continuously watch for changes and compile bundles automatically using the command below:

npm run watch

7. Integrate with Django

If you don’t already have a requirements.txt file in the root of your project repository folder, go ahead and create one, adding this line to the file:

django-webpack-loader

From the terminal, execute (make sure your virtualenv is activated if you’re using one):

pip install -r requirements.txt

In settings.py, add webpack_loader to your installed apps and copy and paste the webpack loader configurations.

INSTALLED_APPS = (
 ...
 'webpack_loader',
)WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}

In your templates folder, add the following to a new or existing html file:

{% load render_bundle from webpack_loader %}
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <title>Example</title>
 </head> <body>
 <div id="react"></div>
 {% render_bundle 'main' %}
 </body>
</html>

Connect your template to a view, and the the view to a url. Navigate to the page and you should see “Hello, world”.
8. Send Django model data to React

Let’s display something more interesting and send model data information from a database to React using Nick Sweeting’s Page-As-A-Component solution.

You can modify the rest of the code snippets to fit your existing django project. I’ll assume we have a class in models.py called Question (from the official Django tutorial):

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

We can create a list of all Question objects with these values in a view.

views.py

from django.views import View...class PollQuestions(View):
    title = "Questions"
    template = 'polls/questions.html'

    def get(self, request):
        questions = list(Question.objects.values('pk', 'question_text'))

        context = {
            'question_text': self.title,
            'props': questions,
        }

        return render(request, self.template, context)

You’ll notice we never defined a value called ‘pk,’ (primary key) but we can ask for it’s value in the list because django assigns one automatically when the model instance is created. React will require some kind of key so we use pk here.

If you are curious, you can fire up the django shell: python manage.py shell and view the serialized query of your model instances with ‘pk’ included:

>>> from polls.models import Question
>>> questions = Question.objects.all()
>>> from django.core import serializers
>>> serializers.serialize("json", questions)
{your model results here}

Hook up the view to the url:

urls.py

path('questions/', PollQuestions.as_view(), name='questions')

Now let’s take the html we created above and make sure the render_bundle script is loaded after the props are declared. The ‘safe’ flag is there so that we later pass a raw python list to our javascript.

{% load render_bundle from webpack_loader %}
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <title>Questions</title>
 </head>
<body>
 <h1>Questions</h1>
 <div id="react"></div>
<script>
  window.props = {{ props|safe }};
  window.react_mount = document.getElementById('react');
</script>
  {% render_bundle 'main' %}

 </body>
</html>

Now let’s modify the index.js we made above:

import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component {
    render() {
        var list = window.props;
        return <div>{list.map(item => <TestChild key={item.pk}  
                        question={item.question_text}/> )}</div>;
    }
}

class TestChild extends React.Component {
    render() {
     return <li><b>{this.props.question}</b></li>;
    }
}


ReactDOM.render(
    <Test/>, 
    window.react_mount, 
);

That’s it! Run the django server and you should now see a list of information from your model data.

 npm install --save-dev mini-css-extract-plugin
 npm install --save @babel/polyfill
 npm install --save @babel/core
 npm install --save babel-plugin-transform-class-properties
 npm install -save babel-loader @babel/core @babel/preset-env webpack
 npm install --save @babel/preset-react
 npm install --save-dev @babel/preset-env
 npm install --save axios