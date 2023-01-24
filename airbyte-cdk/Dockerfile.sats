FROM python:3.9.11-alpine3.15

WORKDIR /home/airbyte-cdk
COPY . ./
ENV LOCAL_CDK_DIR=/home/airbyte-cdk/python
