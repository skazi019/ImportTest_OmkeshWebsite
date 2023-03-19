# Instuctions

This project uses django for backend and react for frontend

### Steps for deploying in Production (react-django hybrid mode)
- Change the `REACT_APP_BACKEND_URI` to the production website URL
- Build your react app with command `npm run build`
- collect the static files `python manage.py collectstatic`
- transfer the `index.html` from `build` folder of react to `templates` folder in django
- make sure the root url `/` is serving this `index.html`
- start your django server `python manage.py runserver`

```bash
npm run build
python manage.py collectstatic --no-input
cp build/index.html templates/
cp build/manifest.json static/
cp build/robots.txt static/
python manage.py runserver

```

