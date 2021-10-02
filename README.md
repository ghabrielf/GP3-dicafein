dicafein# GP3-dicafein
dicafein Documentation

# Rest API Documentation for Dicafein

## 1. User Collection
#### a. Get All Users
##### Endpoint ``/users``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond

```
    {
        "id": 43,
        "name": "fathya",
        "email": "fathya@email.com"
    },
    {
        "id": 44,
        "name": "ghabriel",
        "email": "ghabriel@email.com"
    },
    {
        "id": 45,
        "name": "alfa",
        "email": "al@email.com"
    }
```

#### b. Get Detail Users
##### Endpoint ``/users/:id``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Params
Path Variables
key: id
value: 41

##### Respond
```
{
    "id": 41,
    "name": "user",
    "email": "user@email.com",
    "createdAt": "2021-09-29T05:06:08.000Z",
    "updatedAt": "2021-09-29T07:01:10.000Z"
}
```

#### c. Login
##### Endpoint ``/users/login``
##### Header
Key: token
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzMjk2OTU0N30.gL72_fhgqhxayQXK7lyZMQJ-xSW6yX1Ms-2LXkufMUA
##### Body ``raw``

```
// admin
{
    "email" : "admin@email.com",
    "password": "admin123"
}

// member/user
{
    "email" : "user@email.com",
    "password": "user123"
}
```


##### Response 
```
{
    "message": "Success, you've been logged in",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzMjk2OTU0N30.gL72_fhgqhxayQXK7lyZMQJ-xSW6yX1Ms-2LXkufMUA"
}
```


#### d. Register
##### Endpoint ``/users/login``
##### Body ``raw``
```
{
    //user
    
    "name": "user",
    "email": "user@email.com",
    "password": "user123"
}
```

##### Respond
```
{
    "message": "Register Success",
    "user": {
        "name": "user",
        "email": "user@email.com"
    }
}
```


## 2. Transaction Collection
#### a. Get Transaction
##### Endpoint ``/transactions``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond

```
[
  
    {
        "id": 4,
        "user_id": 1,
        "status": "not yet",
        "payment_money": 100000,
        "createdAt": "2021-09-29T05:07:53.000Z",
        "updatedAt": "2021-09-29T05:07:53.000Z"
    },
    {
        "id": 8,
        "user_id": 51,
        "status": "done",
        "payment_money": 150000,
        "createdAt": "2021-10-01T03:11:09.000Z",
        "updatedAt": "2021-10-01T03:14:09.000Z"
    }
]
```
#### b. Create Transaction
##### Endpoint ``/transactions``

##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``

```
{
    "status": "not yet"
    "payment_money": "100000"
    "user_id": "1"
}
```

##### Respond 

```
{
    "message": "Transaction succesfully created",
    "transaction": {
        "id": 7,
        "user_id": "1",
        "status": "not yet",
        "payment_money": "100000",
        "updatedAt": "2021-10-01T03:03:50.788Z",
        "createdAt": "2021-10-01T03:03:50.788Z"
    }
}
```
#### c. Get Detail Transaction
##### Endpoint ``/transactions/:id``
##### Params
Path Variables
key: id
value: 8
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78

##### Respond

```
{
    "id": 8,
    "user_id": 51,
    "status": "done",
    "payment_money": 100000,
    "createdAt": "2021-10-01T03:11:09.000Z",
    "updatedAt": "2021-10-01T03:11:09.000Z"
}
```

#### d. Update Transaction
##### Endpoint ``/transactions/:id``
##### Params
Path Variables
key: id
value: 8
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``

```
{
    "status": "done"
    "payment_money": "150000"
    "user_id": "51"
}
```

##### Respond
```
{
    "id": 8,
    "user_id": 51,
    "status": "done",
    "payment_money": "150000",
    "createdAt": "2021-10-01T03:11:09.000Z",
    "updatedAt": "2021-10-01T03:14:09.824Z"
}
```

#### e. Delete Transaction
##### Endpoint ``/transactions`/:id`
##### Params
Path Variables
key: id
value: 8
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond
```
{
    "message": "Deleted transaction succesfully"
}
```

#### f. Update Status Transaction
##### Endpoint ``/transactions/:id/status``
##### Params
Path Variables
key: id
value: 8
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "status": "not yet"
}
```
##### Respond 
```
{
    "message": "Update status successfully",
    "transaction": {
        "id": 8,
        "user_id": 51,
        "status": "not yet",
        "payment_money": 150000,
        "createdAt": "2021-10-01T03:11:09.000Z",
        "updatedAt": "2021-10-01T03:31:26.383Z"
    }
}
```

## 3. Menu Collection
#### a. Get All Menu
##### Endpoint ``/menus``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78

##### Respond
```
[
    {
        "id": 17,
        "name": "pizza",
        "category": "food",
        "description": "lorem ipsum dolor sit amet",
        "cost": 30000,
        "image": "pizza.png",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 18,
        "name": "milk",
        "category": "drink",
        "description": "lorem ipsum dolor sit amet",
        "cost": 5000,
        "image": "pizza.png",
        "createdAt": null,
        "updatedAt": null
    },
    {
        "id": 21,
        "name": "mie ayam",
        "category": "food",
        "description": "lorem ipsum dolor sit amet",
        "cost": 10000,
        "image": "nasigoreng.jpg",
        "createdAt": "2021-10-01T01:45:40.000Z",
        "updatedAt": "2021-10-01T01:45:40.000Z"
    }
]
```

#### b. Create Menu
##### Endpoint ``/menus``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "name": "Matcha Latte",
    "category": "food",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": "20000",
    "image": "matcha.jpg"

}
```

##### Respond
```
{
    "message": "Create Menu Success!",
    "menu": {
        "id": 22,
        "name": "Matcha Latte",
        "category": "food",
        "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
        "cost": "20000",
        "image": "matcha.jpg",
        "updatedAt": "2021-10-01T03:36:27.443Z",
        "createdAt": "2021-10-01T03:36:27.443Z"
    }
}
```


#### c. Get Detail Menu
##### Endpoint ``/menus/:id``
##### Params
Path Variables
key: id
value: 22
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78

##### Respond

```
{
    "id": 22,
    "name": "Matcha Latte",
    "category": "food",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": 20000,
    "image": "matcha.jpg",
    "createdAt": "2021-10-01T03:36:27.000Z",
    "updatedAt": "2021-10-01T03:36:27.000Z"
}
```
#### d. Delete Menu
##### Endpoint ``/menus/:id``
##### Params
Path Variables
key: id
value: 21
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respoond
```
{
    "message": "Data Deleted!"
}
```

#### e. Update Menu
##### Endpoint ``/menus/:id``
##### Params
Path Variables
key: id
value: 22
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "name": "Matcha Latte",
    "category": "drink",
    "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
    "cost": "20000",
    "image": "matcha.jpg"

}

```

##### Respond
```
{
    "message": "Update Menu Success!",
    "menu": {
        "id": 22,
        "name": "Matcha Latte",
        "category": "drink",
        "description": "a tea-based beverage combining vivid green matcha tea powder and milk",
        "cost": "20000",
        "image": "matcha.jpg",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```

## 4. Table
#### a. Get All Table
##### Endpoint ``/tables``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1LCJpYXQiOjE2MzI5Nzc3Njd9.BlbttGP0r0kGIJTv4qq0rz2R3LvaeDTeD8MPfNOcM78

##### Respond
```
[
    {
        "id": 25,
        "chalk_board": 9,
        "status": "empty"
    },
    {
        "id": 26,
        "chalk_board": 10,
        "status": "empty"
    },
    {
        "id": 27,
        "chalk_board": 11,
        "status": "empty"
    }
]
```

#### b. Crate Table
##### Endpoint ``/tables``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
     "chalk_board": 12,
     "status": "empty"
}
```

##### Respond 
```
{
    "id": 28,
    "chalk_board": 12,
    "status": "empty",
    "updatedAt": "2021-10-01T03:55:40.555Z",
    "createdAt": "2021-10-01T03:55:40.555Z"
}
```

#### c. Detail Table
##### Endpoint ``/tables/:id``
##### Params
Path Variables
key: id
value: 28
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond
```
{
    "id": 28,
    "chalk_board": 12,
    "status": "empty",
    "createdAt": "2021-10-01T03:36:27.000Z",
    "updatedAt": "2021-10-01T03:36:27.000Z"
}
```

#### d. Update Table
##### Endpoint ``/tables``
##### Params
Path Variables
key: id
value: 28
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
     "chalk_board": 15,
     "status": "fill"
}
```

##### Respond
```
{
    "message": "Update cafe_tables Success!",
    "menu": {
        "id": 28,
        "chalk_board": 15,
        "status": "fill",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```

#### e. Delete Table
##### Endpoint ``/tables/:id``
##### Params
Path Variables
key: id
value: 28
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond

```
{
    "Message" : "Deleted cafe_tables Successfully! "
}
```

#### f. Update Status Table
##### Endpoint ``/tables/:id/status``
##### Params
Path Variables
key: id
value: 27
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "status": "fill"
}
```

##### Respond 
```
{
    "message": "Update status successfully",
    "cafe_table": {
        "id": 27,
        "chalk_board": 11,
        "status": "fill",
        "createdAt": "2021-10-01T03:36:27.000Z",
        "updatedAt": "2021-10-01T03:49:15.050Z"
    }
}
```


## 5. Bookings
#### a. Get All Bookings
##### Endpoint ``/bookings``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond
```
[
    {
        "id": 17,
        "user_id": 48,
        "table_id": 17,
        "status": "done",
        "createdAt": "2021-10-01T01:56:13.000Z",
        "updatedAt": "2021-10-01T01:56:55.000Z"
    },
    {
        "id": 18,
        "user_id": 47,
        "table_id": 17,
        "status": "on site",
        "createdAt": "2021-10-01T01:56:23.000Z",
        "updatedAt": "2021-10-01T01:58:00.000Z"
    }
]
```
#### b. Create Bookings
##### Endpoint ``/bookings``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A
##### Body ``raw``
```
{
    "table_id": 25
}
```
##### Respond
```
{
    "message": "Booking succesfully created",
    "data_booking": {
        "id": 19,
        "user_id": 51,
        "table_id": 25,
        "status": "on site",
        "updatedAt": "2021-10-01T04:33:38.757Z",
        "createdAt": "2021-10-01T04:33:38.757Z"
    }
}
```

#### c. Detail Bookings
##### Endpoint ``/bookings/:id``
##### Paras
key: id
value: 19
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond
```
{
    "id": 19,
    "user_id": 51,
    "table_id": 25,
    "status": "on site",
    "createdAt": "2021-10-01T04:33:38.000Z",
    "updatedAt": "2021-10-01T04:33:38.000Z"
}
```

#### d. Update Bookings
##### Endpoint ``/bookings/:id``
##### Params
Path Variables
key: id
value: 19
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "table_id": 18
}
```

##### Respond 
```
{
    "message": "Booking updated",
    "data_booking": {
        "id": 19,
        "user_id": 51,
        "table_id": "18",
        "status": "on site",
        "createdAt": "2021-10-01T04:33:38.000Z",
        "updatedAt": "2021-10-01T04:43:35.381Z"
    }
}
```

#### e. Delete Bookings
##### Endpoint ``/bookings/:id``
##### Params
Path Variables
key: id
value: 19
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Respond
```
{
    "message": "Deleted booking succesfully"
}
```

#### f. Update Status Booking
##### Endpoint ``/bookings/:id/status``
##### Params
Path Variables
key: id
value: 18
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

##### Body ``raw``
```
{
    "status": "done"
}
```

##### Respond
```
    "message": "Update status successfully",
        "bookings": {
            "user_id": 47,
            "table_id": 17,
            "status": "done",
            "createdAt": "2021-10-01T03:36:27.000Z",
            "updatedAt": "2021-10-01T03:49:15.050Z"
```
## 6. Transaction-Menu

#### a. Create Transaction_Menu
##### Endpoint ``/transaction_menu/:id/status``
##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A

key: user_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxLCJpYXQiOjE2MzMwNTc3NDF9.SB74MnaSK4-oTYh69eNoGCHld1sbekjmlVfwi0G_DBQ

##### Body ``raw``
```
{
    "menu_id" : 1
}
```
##### Respond
```
{
    "id": 8,
    "user_id": 51,
    "menu_id": 1,
    "updatedAt": "2021-10-01T06:38:38.026Z",
    "createdAt": "2021-10-01T06:38:38.026Z"
}
```

#### b. Delete Transaction_Menu
##### Endpoint ``/transaction_menu/:id``
##### Params
Path Variables
key: id
value: 8

##### Header
key: admin_token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQwLCJpYXQiOjE2MzI5Nzc1NzN9.wJzBazCcx-LbMPeSiIaf7x4-i-KyWMV0czizxEcV8_A


##### Respond

```
{
    "message": "Deleted transaction menu succesfully"
}
```