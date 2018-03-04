Project: NYT Explorer
---

# Introduction

NYT Explorer is single page web app that enables end user to explore NY Times archive of articles. 

# Scenario

An end user selects year and month and then clicks on **find** button in order to get all articles published in NYT for that month and year. The System displays results as selectable items that encompasses title, description and preview image for each article in the results. User select an item and System displays details of the selected article.

# RESTful APIs to be used

## NY Times API

> You already know that NYTimes.com is an unparalleled source of news and information. But now it's a premier source of data, too — why just read the news when you can hack it?

[https://developer.nytimes.com/](https://developer.nytimes.com/)

### Archive API

> The Archive API provides lists of NYT articles by month going back to 1851. Simply pass in the year and month you want and it returns a JSON object with all articles for that month.

[https://developer.nytimes.com/archive_api.json](https://developer.nytimes.com/archive_api.json)
    
## Link Preview API

> I guess we all know what happens on Facebook when you paste an URL into a post? Facebook's server automatically grabs the title and description from the linked website and lets you select a thumbnail image from those available on the linked site.

> Our RESTful API service is doing this work for you. Our servers will inspect any requested URL and return JSON formatted summary with a title, description and preview image.

[https://www.linkpreview.net/](https://www.linkpreview.net/)

# Requirements

## Implementational constraints

- Styling must be implemented from scratch (no Twitter Bootstrap or something similar is allowed)
- Must use JQuery for AJAX
- Must use specified APIs
- Must use React JS for, at least, search results display
- Project source code must be properly structured (split CSS/HTML/JS source code in files)

Note: Please, use only English in your source code!

## Functional requirements

- Display 20 search results
- Display search results in 4x5 grid on desktop
- Display search results in 2x10 grid on tablet
- Display search results in 1x20 grid on mobile
- Each search result display item must have: title, description and preview image
- Search result details display must contain stringified JSON that is in preatty print format
- Optional: display some progress during fetching articles
- Optional: display all results in pages
- Optional: support "Add to Bookmarks" button for selected search result display item

# How to submit the implementation?

The implementation source code must be uploaded to git repository hosted on GitHub. The final page must be hosted on GitHub Pages. Send email with links to the repository and app to prekvalifikacija@zaposlenje.org. In subject put only "NYTE - your full name". Please, send the email on 2nd of March.

# Implementation acceptance criteria

In order of importance:

- [up to 30 points] Does it satisfy implementational constraints?
- [up to 30 points] Does it satisfy functional requirements?
- [up to 10 points] Is source code readable (naming, comments, formating)?
- [up to 10 points] Is it bug free?
- [up to 10 points] Does it support some extra (non requiered) functionalities?
- [up to 5 points] Are commit messages "readable"?
- [up to 5 points] How "cool" it is?

In order to "pass" the challenge You must have at least 65 points.

# Guidlines

- start with some simple design
- create API key for both APIs
- learn how to use APIs to get what is requiered
- make a basic working app
- support responsive layout
- test your app and fix bugs
- once You think You are done: refactore your code
- commit early commit often
- ask yourself do you repeat yourself
- ask yourself can I do this in some simple way
- do it in small steps
- be productive: use https://www.pomodorist.com:)
- for React JS usage, try to read documentation before looking for an answer on Gooogle
- if not sure what to do: do what You think it is the best to do!
- if You need help: ping Stefan or Jovan on Slack in DM
