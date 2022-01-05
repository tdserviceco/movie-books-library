const paginationDataBooks = (state = null, action) => {
  switch (action.type) {
    case 'PAGINATIONDATABOOKS':
      return action.value
    default:
      return state;
  }
}

const paginationDataMovies = (state = null, action) => {
  switch (action.type) {
    case 'PAGINATIONDATAMOVIES':
      return action.value
    default:
      return state;
  }
}

const paginationNumberBooks = (state = 1, action) => {
  switch (action.type) {
    case 'PAGINATIONNUMBERBOOKS':
      return action.value
    default:
      return state;
  }
}

const paginationNumberMovies = (state = 1, action) => {
  switch (action.type) {
    case 'PAGINATIONNUMBERMOVIES':
      return action.value
    default:
      return state;
  }
}

export { paginationDataMovies, paginationDataBooks, paginationNumberMovies, paginationNumberBooks };