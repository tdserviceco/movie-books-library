export const paginationDataBooks = (data) => {
  return {
    type: 'PAGINATIONDATABOOKS',
    value: data
  }
}

export const paginationDataMovies = (data) => {
  return {
    type: 'PAGINATIONDATAMOVIES',
    value: data
  }
}


export const paginationNumberBooks = (number) => {
  return {
    type: 'PAGINATIONNUMBERBOOKS',
    value: Number(number)
  }
}

export const paginationNumberMovies = (number) => {
  return {
    type: 'PAGINATIONNUMBERMOVIES',
    value: Number(number)
  }
}