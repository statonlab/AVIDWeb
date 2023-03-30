FROM ubuntu:18.04

RUN apt-get update -y \
	&& apt -y upgrade \
	&& apt-get install -y build-essential libssl-dev libffi-dev python3 python3-pip python3-dev

RUN mkdir /app
WORKDIR /app
COPY app.py /app/.
COPY requirements.txt /app/.

RUN python3 -V
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["app.py"]
