import { Resolver, Mutation, Arg, Query, InputType, Field } from 'type-graphql';
import { Rule } from '../entity/Rule';

@InputType()
class RuleInput {
  @Field()
  srcAddr: string;

  @Field()
  dstAddr: string;
}

@Resolver()
export class RuleResolver {
  @Query(() => [Rule])
  Rules() {
    return Rule.find();
  }

  @Mutation(() => Boolean)
  async createRule(@Arg('rules', () => [RuleInput]) rules: [RuleInput]) {
    await Rule.insert(rules);
    return true;
  }
}
