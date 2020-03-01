import { Resolver, Mutation, Arg, Query } from 'type-graphql';

@Resolver()
export class RuleResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }

  @Mutation(() => Boolean)
  createRule(@Arg('srcAddr') srcAddr: string, @Arg('dstAddr') dstAddr: string) {
    console.log(srcAddr, dstAddr);
    return true;
  }
}
