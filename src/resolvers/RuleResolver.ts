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
class RuleUpdateInput {
  @Field(() => String, { nullable: true })
  srcAddr?: string;

  @Field(() => String, { nullable: true })
  dstAddr?: string;
}

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

  @Mutation(() => Boolean)
  async updateRule(
    @Arg('id', () => Int) id: number,
    @Arg('rule', () => RuleUpdateInput) rule: RuleUpdateInput
  ) {
    await Rule.update({ id }, rule);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteRule(@Arg('id', () => Int) id: number) {
    await Rule.delete({ id });
    return true;
  }
}
