FROM python:3.8
WORKDIR /app
ENV PYTHONUNBUFFERED=1
RUN mkdir -p ~/.postgresql && wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" -O ~/.postgresql/root.crt && chmod 0600 ~/.postgresql/root.crt
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt
COPY . /app
WORKDIR /app

