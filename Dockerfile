FROM atlassianlabs/docker-node-jdk-chrome-firefox:latest
RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list
RUN set -x \
    && curl -sS https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/chrome.list \
    && apt-get update \
    && apt-get install --no-install-recommends -y \
        google-chrome-stable \
    && ln -sf /usr/bin/xvfb-chrome $CHROME_BIN \
    && rm -rf /var/lib/apt/lists/* /etc/apt/sources.list.d/chrome.list