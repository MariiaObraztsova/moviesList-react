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

5. Test the app :)