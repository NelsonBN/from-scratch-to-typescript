try {
    function unauthenticatedError() {
        throw new Error('You must be logged in to continue');
    }
    unauthenticatedError();
}
catch(error) {
    console.log(error.message);
}


console.log('------------------');

try
{
    function forbiddenError() : never {
        throw new Error('You are not allowed to access this resource');
    }
    forbiddenError();
}
catch(error) {
    console.log(error.message);
}
