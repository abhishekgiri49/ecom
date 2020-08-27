DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'ecom',
        'USER': 'postgres',
        'PASSWORD': '425748',
        'HOST': '127.0.0.1',
        'PORT': '5432',
        }
}

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd0ma46dvjfncewd9(*%51@z^e=t=p1^_@6w6==459_y&*#7zif'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

SITE_URL = 'http://localhost:8000'
SITE_ID = 1

# Email Settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = '******@gmail.com'
EMAIL_HOST_PASSWORD = '*******'
EMAIL_PORT = 587

