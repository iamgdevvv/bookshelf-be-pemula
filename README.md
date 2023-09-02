<h1 align="center">
  <br>
  Submission Bookshelf API
  <br>
</h1>

<h4 align="center">In order to pass and get the Belajar Membuat Aplikasi Back-End untuk Pemula certificate, you must create a Bookshelf API project according to the complete criteria from Dicoding.</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#rest-api">Rest API</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

## About

When building a Bookshelf API, of course you need to test to ensure the API runs according to existing criteria. We have provided Postman Collection and Environment files that you can use for testing. Please download the file at the following link: [Postman Bookshelf API Test Collection dan Environment](https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

list things you need to use the software and how to install them.

-   node
-   npm

### Installing and Running

```bash
# Clone this repository
$ git clone https://github.com/iamgdevvv/bookshelf-be-pemula

# Go into the repository
$ cd bookshelf-be-pemula
$ npm install
$ npm run start::dev
```

## Rest API

### End-point: [Mandatory] Add Book With Complete Data

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "{{newName}}",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": {{newPageCount}},
    "readPage": {{newReadPage}},
    "reading": {{newReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Add Book With Finished Reading

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "{{newName}}",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 100,
    "readPage": 100,
    "reading": {{newReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Add Book Without Name

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": {{newPageCount}},
    "readPage": {{newReadPage}},
    "reading": {{newReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Add Book with Page Read More Than Page Count

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "{{newName}}",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 80,
    "readPage": 90,
    "reading": {{newReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Get All Books

#### Method: GET

> ```
> http://localhost:{{port}}/books
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Get Detail Books With Correct Id

#### Method: GET

> ```
> http://localhost:{{port}}/books/{{bookId}}
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Get Detail Finished Book

#### Method: GET

> ```
> http://localhost:{{port}}/books/{{bookIdWithFinishedReading}}
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Get Detail Books With Invalid Id

#### Method: GET

> ```
> http://localhost:{{port}}/books/xxxxx
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Update Book With Complete Data

#### Method: PUT

> ```
> http://localhost:{{port}}/books/{{bookId}}
> ```

#### Body (**raw**)

```json
{
    "name": "{{updateName}}",
    "year": {{updateYear}},
    "author": "{{updateAuthor}}",
    "summary": "{{updateSummary}}",
    "publisher": "{{updatePublisher}}",
    "pageCount": {{updatePageCount}},
    "readPage": {{updateReadPage}},
    "reading": {{updateReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Update Book Without Name

#### Method: PUT

> ```
> http://localhost:{{port}}/books/{{bookId}}
> ```

#### Body (**raw**)

```json
{
    "year": {{updateYear}},
    "author": "{{updateAuthor}}",
    "summary": "{{updateSummary}}",
    "publisher": "{{updatePublisher}}",
    "pageCount": {{updatePageCount}},
    "readPage": {{updateReadPage}},
    "reading": {{updateReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Update Book With Page Read More Than Page Count

#### Method: PUT

> ```
> http://localhost:{{port}}/books/{{bookId}}
> ```

#### Body (**raw**)

```json
{
    "name": "{{updateName}}",
    "year": {{updateYear}},
    "author": "{{updateAuthor}}",
    "summary": "{{updateSummary}}",
    "publisher": "{{updatePublisher}}",
    "pageCount": 80,
    "readPage": 90,
    "reading": {{updateReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Update Book with Invalid Id

#### Method: PUT

> ```
> http://localhost:{{port}}/books/xxxxx
> ```

#### Body (**raw**)

```json
{
    "name": "{{updateName}}",
    "year": {{updateYear}},
    "author": "{{updateAuthor}}",
    "summary": "{{updateSummary}}",
    "publisher": "{{updatePublisher}}",
    "pageCount": {{updatePageCount}},
    "readPage": {{updateReadPage}},
    "reading": {{updateReading}}
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Delete Book with Correct Id

#### Method: DELETE

> ```
> http://localhost:{{port}}/books/{{bookId}}
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Delete Finished book

#### Method: DELETE

> ```
> http://localhost:{{port}}/books/{{bookIdWithFinishedReading}}
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Mandatory] Delete Book with Invalid Id

#### Method: DELETE

> ```
> http://localhost:{{port}}/books/xxxxx
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Add Reading and Finished Book

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "{{newName}}",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 100,
    "readPage": 100,
    "reading": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Add Reading and Unfinished Book with "Dicoding" Name

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "Kelas Dicoding",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 100,
    "readPage": 99,
    "reading": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Add Unreading Books and Unfinished Book "Dicoding" Name

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "dicoding Jobs",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 100,
    "readPage": 0,
    "reading": false
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Add Unreading Books and Unfinished Book

#### Method: POST

> ```
> http://localhost:{{port}}/books
> ```

#### Body (**raw**)

```json
{
    "name": "{{newName}}",
    "year": {{newYear}},
    "author": "{{newAuthor}}",
    "summary": "{{newSummary}}",
    "publisher": "{{newPublisher}}",
    "pageCount": 100,
    "readPage": 0,
    "reading": false
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Optional] Get All Reading Books

#### Method: GET

> ```
> http://localhost:{{port}}/books?reading=1
> ```

#### Query Params

| Param   | value |
| ------- | ----- |
| reading | 1     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Optional] Get All Unreading Books

#### Method: GET

> ```
> http://localhost:{{port}}/books?reading=0
> ```

#### Query Params

| Param   | value |
| ------- | ----- |
| reading | 0     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Optional] Get All Finished Books

#### Method: GET

> ```
> http://localhost:{{port}}/books?finished=1
> ```

#### Query Params

| Param    | value |
| -------- | ----- |
| finished | 1     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Optional] Get All Unfinished Books

#### Method: GET

> ```
> http://localhost:{{port}}/books?finished=0
> ```

#### Query Params

| Param    | value |
| -------- | ----- |
| finished | 0     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: [Optional] Get All Books Contains "Dicoding" Name

#### Method: GET

> ```
> http://localhost:{{port}}/books?name=Dicoding
> ```

#### Query Params

| Param | value    |
| ----- | -------- |
| name  | Dicoding |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Roadmap

-   [x] Add this README.
-   [x] Create all the requirement features.
-   [x] Test project with postman collection test.

## Contributing

No thanks

## Support

You can also support us by:

<p align="left">
  <a title="Dukung saya di trakteer.id" style="box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
    line-height: 36px!important;
    display: inline-block!important;
    background-color: #be1e2d;
    padding: 4px 24px !important;
    text-align: center !important;
    border-radius: 9999px;
    color: #fff;
    cursor: pointer;
    overflow-wrap: break-word;
    vertical-align: middle;
    border: 0 none #fff !important;
    font-family: 'Quicksand',Helvetica,Century Gothic,sans-serif !important;
    text-decoration: none;
    text-shadow: none;
    font-weight: 700!important;" href="https://trakteer.id/iamgdev" target="_blank">
    <span class="trbtn-txt">
        <img src="https://cdn.trakteer.id/images/embed/trbtn-icon.png" alt="Traktiran" style="display: inline-block; width: 14px; height: 22px; margin-right: 6px; margin-bottom: -2px;" />
        <span>Trakteer</span>
    </span>
</a>
</p>

## License

[MIT License](https://github.com/iamgdevvv/bookshelf-be-pemula/LICENSE.md)

## You may also like...

List of apps or libs that do similar stuff as your project.

-   [Gundala Scroll](https://github.com/iamgdevvv/gundalascroll)
-   [Chartbulek](https://github.com/iamgdevvv/chartbulek)

---

> [iamgdev.my.id](iamgdev.my.id) &nbsp;&middot;&nbsp;
> GitHub [@iamgdevvv](https://github.com/iamgdevvv) &nbsp;&middot;&nbsp;
> Youtube [@iamgdev](https://www.youtube.com/@iamgdev)
