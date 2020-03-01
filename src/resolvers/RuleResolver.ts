import {
  Resolver,
  Mutation,
  Arg,
  Query,
  InputType,
  Field,
  Int
} from 'type-graphql';
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

  @Mutation(() => Boolean)
  async updateRule(
    @Arg('id', () => Int) id: number,
    @Arg('rule', () => RuleInput) rule: RuleInput
  ) {
    await Rule.update({ id }, rule);
    return true;
  }
}
