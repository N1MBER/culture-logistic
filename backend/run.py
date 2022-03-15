import os

if __name__ == '__main__':
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cultural_logistic.settings")
    from django.core.management import call_command
    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
    PORT = os.environ.get("PORT", 8000)
    call_command('migrate')
    call_command('runserver',  f'0.0.0.0:{PORT}')