REMOTE_USER = subhams
REMOTE_HOST = athena.dialup.mit.edu
REMOTE_DIR = ~/www

.PHONY: all build clean

all: build

build:
	./build.sh

serve:
	rsync -avz --delete site/ $(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_DIR)/

clean:
	rm -rf site
