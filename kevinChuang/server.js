require('express')().use(require('express').static('./build')).listen(3000,()=>console.log('Cows up on 3000'));
