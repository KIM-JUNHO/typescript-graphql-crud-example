import { Resolver, Mutation, Arg } from 'type-graphql';

@Resolver()
export class RuleResolver {
  @Mutation(() => Boolean)
  createRule(@Arg('srcAddr') srcAddr: string, @Arg('dstAddr') dstAddr: string) {
    console.log(srcAddr, dstAddr);
    return true;
  }
}
