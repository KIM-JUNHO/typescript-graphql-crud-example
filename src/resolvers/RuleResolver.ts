import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Rule } from '../entity/Rule';

@Resolver()
export class RuleResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }

  @Mutation(() => Boolean)
  async createRule(
    @Arg('srcAddr') srcAddr: string,
    @Arg('dstAddr') dstAddr: string
  ) {
    await Rule.insert({ srcAddr, dstAddr });
    return true;
  }
}
