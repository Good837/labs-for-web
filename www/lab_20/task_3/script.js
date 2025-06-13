function isValidURL(url) {
    const regex = /^(https?|ftp):\/\//;

    console.log(url);

    if (regex.test(url)) {
        console.log('Url is correct!');
      } else {
        console.log('Url is not correct!');
      }
}

isValidURL("https://www.example.com");
isValidURL("ftp://fileserver/documents");
isValidURL("htt:invalid-url");
isValidURL("http://example.com");