import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Rule } from '../entity/Rule';

@Resolver()
export class RuleResolver {
  @Query(() => [Rule])
  Rules() {
    return Rule.find();
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
