function requestValidator(object) {
    
    const requestMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /^([\w\d\.]+|\*)$/g;
    const httpVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /^([^<>\\&'"]*)$/g;

    if (!requestMethods.includes(object.method) || !object.hasOwnProperty('method')) {
        
        throw new Error('Invalid request header: Invalid Method');

    }

    if (!uriRegex.test(object.uri) || !object.hasOwnProperty('uri')) {
        
        throw new Error('Invalid request header: Invalid URI');

    }

    if (!httpVersions.includes(object.version) || !object.hasOwnProperty('version')) {
        
        throw new Error('Invalid request header: Invalid Version');

    }

    if (!messageRegex.test(object.message) || !object.hasOwnProperty('message')) {
        
        throw new Error('Invalid request header: Invalid Message');

    }
    
    return object;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  })
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  })