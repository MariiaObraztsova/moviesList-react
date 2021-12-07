export interface Movie {
  id: number,
  title: string,
  year: number,
  format: string,
  actors: Actor[],
}

export interface CreatedMovie {
  title: string,
  year: number,
  format: string,
  actors: string[],
}

export interface Actor {
  // id: number,
  name: string,
  // createdAt: string,
  // updatedAt: string
}