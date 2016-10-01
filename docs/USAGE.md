## Usage

- [How do I interact with the app?](#interacting-with-the-app)
- [How do I stop and start the server?](#stopping-and-starting-the-server)
- [How do I run tests?](#running-tests)
- [How do I rebuild Ember?](#rebuilding-ember)
- [Do I need special environment variables?](#environment)
- [How do I generate and serve documentation?](#generating-documentation)
- [How do I push changes to GitHub?](#pushing-changes)

### Interacting with the app

You'll generally interact with the app using `ember server`. If you are running the [Elixir API](https://github.com/code-corps/code-corps-api/) locally, running `ember server` will make requests to the API by default. 
If you aren't running the API locally, you can use our remote development enviornment by running `ember server --environment=remote-development`.

Once the server has been started, you can visit your app at `http://localhost:4200`.

Note that Ember is able to live-reload as changes are made to the codebase. Ember-CLI will build those changes and apply them; No need to stop and start the server for every change!

### Stopping and starting the server

Need to stop the server? `Ctrl+C` will do the trick.

To start the server again run `ember server`.

### Rebuilding Ember

To rebuild, simply run `ember server`. You can clear npm's cache with `npm --cache-clear`, then reinstall your node modules with `npm install` if necessary.

### Running tests

We use [ember-exam](https://github.com/trentmwillis/ember-exam) for running tests since it allows for parallel testing, randomized orders, and other neat configurations. You can check out the repository readme there to see the available options. A few handy ones to use when running tests locally are outlined below.

* `ember exam` will run the tests
* `ember exam --split=3 --weighted --parallel` will run tests in 3 PhantomJS instances in parallel with an equal split. Currently, 3 parallel instances will run the tests the quickest.
* `ember exam --random` will run the tests in a random order
* `ember exam --filter='acceptance'` will only run acceptance tests. The same sytax can be used for other types of tests, such as `ember exam --filter='unit'` and `ember exam --filter='integration'`

### Environment

When contributing to the app, you will not have access to secure environment variables required to run some tests or work on aspects of the app locally. Unfortunately, for security reasons, we cannot provide you with sandboxed keys for doing this on your own.

You can see these variables in `.env.deploy.staging.example` and `.env.deploy.production.example`.

Without too much effort, you should be able to set up keys on your own for the following portions of the app:

-
-
-

#### Donations and Stripe

If you're testing anything with donations locally, you'll need a Stripe account.

You can register for a Stripe account here: [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)

In your `.env` you should have a `STRIPE_SECRET_KEY` and `STRIPE_PLATFORM_CLIENT_ID`.

- `STRIPE_SECRET_KEY` should be set to your "Test Secret Key" from the [API Keys section of your Stripe dashboard](https://dashboard.stripe.com/account/apikeys).
- `STRIPE_PLATFORM_CLIENT_ID` should be set to "Development `client_id`" key from the [Connect section of your Stripe dashboard](https://dashboard.stripe.com/account/applications/settings). You'll want to set the redirect URI to `http://localhost:4200/oauth/stripe`.

### Generating Documentation

The Code Corps Ember application uses [YUIDoc](http://yui.github.io/yuidoc/) for documentation. When contributing to the documentation please follow the [YUIDoc syntax](http://yui.github.io/yuidoc/syntax/index.html) and our [style guide](STYLEGUIDE.md) for application specific documenation standards.

To compile documentation from accross the app, install and run YUIDoc:

* `npm install -g yuidocjs`
* `yuidoc -c yuidoc.json`

The documentation will be generated in the `/docs` folder.

Now that it has been generated, you can run the server to view it:

* `yuidoc --server [your port of choice]`
* Visit `localhost:[your port of choice]` in your browser.

### Pushing changes

You can use `git` as you normally would to push changes.
