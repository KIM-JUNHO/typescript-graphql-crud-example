import { Resolver, Mutation, Arg, Int } from 'type-graphql';

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  createMovie(
    @Arg('title') title: string,
    @Arg('minutes', () => Int) minutes: number
  ) {
    console.log(title);
    return true;
  }
}
