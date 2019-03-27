import Mock from 'mockjs';

// Mock.setup({
//     timeout: '200-600'
// })

export default Mock.mock(/\/todos\/1/,
    'get',
    {
        'user': 'a',
        'password|1-100': 100
    });


