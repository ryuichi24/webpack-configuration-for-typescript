import apiService from './services/api.service';

const init = async () => {
  // turn off console logging if it's production
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
  }

  try {
    const res = await apiService.get<{ successMsg: string; users: any[] }>('/api/v1/users');
    if (!res) return console.log('has failed to fetch data from API');

    const { successMsg, users } = res;

    console.log(successMsg);
    console.log('Users: ', users);

    // do something with users data
    //
    //
    //
  } catch (err) {
    console.log(err.message);
  }
};

init();
