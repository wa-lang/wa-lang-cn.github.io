# go install github.com/wa-lang/wabook@latest

default:
	wabook serve

build:
	-rm -rf ./book
	-rm -rf ../public/talks
	wabook build
	mv book ../public/talks

clean:
	-rm -rf ./book
