
require(RJSONIO)

uniqueSort <- function(test){
  test <- fromJSON(test)
  test <- unlist(test$test)
  test <- unique(test)
  test <- sort(test)
  res <- list(test=test)
  toJSON(res)
}


# args <- '{"test":[1,4,4,1,1,0,0,1,1,1,1,0,1,0,2,0,1,1,2,0,0,3,2]}'
# res <- uniqueSort(args)
# fromJSON(res)$test