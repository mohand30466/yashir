export class Api {
  static Regester(body) {
    return fetch(`http://127.0.0.1:8000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static Login(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static UpdateUserProfile(id,data) {
    
    return fetch(`http://127.0.0.1:8000/userprofile/${id}/`, {
      method: "PUT",
      body:data
    }).then((res) => res.json())
    .catch(err =>console.log(err))
  }

  static ChangePassword(body,id) {
    return fetch(`http://127.0.0.1:8000/users/${id}/ChangePass/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static GetBosts() {
    
    return fetch(`http://127.0.0.1:8000/bosts/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  static Bost(id,body) {
    
    return fetch(`http://127.0.0.1:8000/bosts/${id}/`, {
      method:"PUT",
      body: body
    }).then((res) => res.json());
  }

  static Getusers() {
    
    return fetch(`http://127.0.0.1:8000/users/`, {
    
    }).then((res) => res.json());
  }
  

}
