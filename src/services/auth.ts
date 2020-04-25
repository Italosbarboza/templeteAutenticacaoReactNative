interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'dasoidk23rwjoder2309jpod09weidjospijsowripksda',
        user: {
          name: 'Italo',
          email: 'italo@gmail.com',
        },
      });
    }, 2000);
  });
}
