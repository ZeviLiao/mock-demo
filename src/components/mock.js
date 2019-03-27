import Mock from 'mockjs';

export default Mock.mock(/\/todos\/1/,'get', {
    'user': 'a',
    'password|1-100': 100
});


