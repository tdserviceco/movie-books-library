import { gql } from "@apollo/client";

const QUERY_ALL_MOVIES_AND_BOOKS = gql`
query {
  movies(sort: "createdAt:DESC", pagination: { limit: 100 }) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        title
        length
        releasedate
        cover {
          data {
            attributes {
              url
              formats
            }
          }
        }
        grade
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
  books(sort: "createdAt:DESC", pagination: { limit: 100 }) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        title
        author
        published
        pages
        cover {
          data {
            attributes {
              url
              formats
            }
          }
        }
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
        grade
      }
    }
  }
}`

const QUERY_CATEGORY_BY_ID = gql`
query category($id:ID!) {
  category(id: $id) {
    
      data {
      attributes {
        name
        movies(sort: "createdAt:DESC", pagination: { limit: 100 }) {
          data {
            id
            attributes {
              title
              length
              releasedate
              cover {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
              categories {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
        books(sort: "createdAt:DESC", pagination: { limit: 100 }) {
          data {
            attributes {
              title
              author
              pages
              grade
              cover {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
              categories {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`

const QUERY_BOOKS = gql`
query page($page: Int!) {
  books(sort:"createdAt:DESC", pagination: { page: $page, pageSize: 10 }) {
   meta {
      pagination {
        total
        pageSize
        page
      }
    }
    data {
      id
      attributes {
        title
        author
        published
        pages
        cover {
          data {
            attributes {
              url
              formats
            }
          }
        }
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
        grade
      }
    }
  
  }
}`

const QUERY_MOVIES = gql`
query page($page: Int!) {
  movies(sort: "createdAt:DESC", pagination: { page: $page, pageSize: 10 }) {
    meta {
      pagination {
        total
        pageSize
        page
      }
    }
    data {
      id
      attributes {
        title
        length
        releasedate
        cover {
          data {
            attributes {
              url
              formats
              caption
            }
          }
        }
        grade
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}`

export { QUERY_BOOKS, QUERY_MOVIES, QUERY_CATEGORY_BY_ID, QUERY_ALL_MOVIES_AND_BOOKS }