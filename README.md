# Instuctions

This project uses django for backend and react for frontend

### Steps for deploying in Production (react-django hybrid mode)
- Build your react app with command `npm run build`
- collect the static files `python manage.py collectstatic`
- transfer the `index.html` from `build` folder of react to `templates` folder in django
- make sure the root url `/` is serving this `index.html`
- start your django server `python manage.py runserver`
