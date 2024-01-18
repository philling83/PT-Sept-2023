export function getAllDogs() {
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  return fetch("/dogs/2");
}

export function postNewDog() {
  const urlParams = new URLSearchParams({
    name: "Sirius",
    age: 2
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "x-www-form-urlencoded"
    },
    body: urlParams
  };

  return fetch("/dogs", options);
};

export function postNewDogV2(name, age) {
  const urlParams = new URLSearchParams({
    name,
    age
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "x-www-form-urlencoded"
    },
    body: urlParams
  };

  return fetch("/dogs", options);
};

export function deleteDog(id) {
  const options = {
    method: "POST",
    headers: {
      "AUTH": "ckyut5wau0000jyv5bsrud90y"
    }
  };

  return fetch(`/dogs/${id}/delete`, options);
};