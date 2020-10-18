### Motivation 🏁

Students need to show employers real-world software experience in order to stand
out.

A report card that outlines a student's open-source experience at Grey Software
can allow them to stand apart from the competition.

### Initiative Overview 👁️‍🗨️

<!--
  A clear and concise description of what the initiative is.
-->

Every contributor to Grey Software will be able to generate an authentic report
card by entering their username into grey.software/report-card

Contributors will be able to share a PDF of this report on websites like
LinkedIn.

A link-able version of their report card will also be available at
grey.software/report-card/GITHUB_USERNAME if they choose to.

**Implementation Details 🛠️**

<!--- Please share a plan to help realize this initiative -->

We'll add a page to our website under /report-card that will have an input box
for Github usernames.

Once users enter their usernames and click "Generate", our backend will scrape
Github and query its API to generate a PDF of their report card.

If they choose to (via a checkbox), they can host their report card publicly on
our website.

Additional Notes:

- Students will have to authenticate with Guthub in order to generate a verified
  report card for their username
- A user's insights for a repo will have to be scraped
-

### Impact 💥

Students struggling to demonstrate real-world software experience will now be
able to show their open-source work in a professional manner.

### Describe alternatives you've considered 🔍

Students could link their contributor cards from the Github insights page for
every repo they have contributed to.

### Additional details ℹ️

N/A
