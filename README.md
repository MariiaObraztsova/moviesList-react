[Test task](https://docs.google.com/document/d/1JBAJgTJWueI2ABe8d_QThVIIuAkLBxVj/edit?usp=sharing&ouid=103494789716798923569&rtpof=true&sd=true)

How to run the app:
1. Docker pull command (to run image with movies):
$ docker pull webbylabhub/movies

2. Starting instance:
$ docker run --name movies -p 8000:8000 webbylabhub/movies

3. Build doker with React app:
$ docker build -t client .

4. Starting instance:
$ docker run -it -p 3000:3000 client

5. IF it doesn't work, try to change email in api.ts in 15 and 35 lines (just add '8' to the current email), then redo stages 3-4

I used localStorage to save the token because of the short amount of time to correct the mistakes. But it is a bad decision: token is a personal data and shouldn't be saved in browser local storage.