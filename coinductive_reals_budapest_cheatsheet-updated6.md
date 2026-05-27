# Coinductive Reals / Higher Conductive Types
## Budapest whiteboard talk – cheat sheet

## Core message

**Higher conductive types are the dual of higher inductive types.**

- HITs build equality by constructors (paths).
- Higher conductive types constrain equality by destructors / observations.
- Signed-digit reals provide a concrete example.

Slogan:

> Points are constructed by digits; equality is observed coinductively.

---

## 1. Motivation: HITs and HoTT reals

Audience knows Agda.

Quick review:

- Higher inductive types
- points + paths
- quotienting / equality constructors
- mention HoTT reals as familiar example

No technical details.

Main transition:

> HITs explain how to *construct* equality.
> What is the dual idea for coinductive objects?

---

## 2. Signed-digit interval

Idea:

Represent reals in the interval using digits

```text
Digit = {-1,0,+1}
```

and infinite refinement

```text
d :: x
```

Interpretation:

```text
d :: x
```

denotes the real obtained by first choosing digit `d` and then continuing with `x`.

We already think of interval elements informally as denoting reals:

```text
[[ - ]] : I -> [-1,1]
```

with semantic interpretation

```text
[[ d :: x ]]
=
(d + [[x]]) / 2
```

So `d :: x` selects the `d`-subinterval and then refines recursively.

Motivation:

Arithmetic operations become definable/productive.

Important intuition:

- many representations for same real
- redundancy is a feature, not a bug
- carries/local computation

Example, expressed using boundary predicates rather than stream objects:

```text
-1 :: x = +1 :: y
```

with

```text
1∞ ~ x
(-1)∞ ~ y
```

---

## 3. Why ordinary streams fail

Review coinduction via streams.

```agda
record Stream (A : Set) : Set where
  coinductive
  field
    head : A
    tail : Stream A
```

Observation principle:

- streams defined by destructors
- equality by bisimulation

But this is wrong for reals.

Problem:

We can observe

```text
head
```

and therefore distinguish

```text
-1 :: x
+1 :: y
```

immediately.

Semantically this is invalid.

Key example, informally:

```text
-1 :: (right boundary)
=
+1 :: (left boundary)
```

formally expressed using the boundary predicates `1∞ ~ x` and
`(-1)∞ ~ y`.

Hence:

> head is not a valid observable of a real.

Remark:

Could quotient streams.

But instead:

> Build equality directly into the coinductive object.

---

## 4. Interval algebras

Define interval algebra.

Carrier:

```text
I : Type
```

Operation:

```text
_::_ : Digit -> I -> I
```

Goal:

Terminal interval algebra = real interval.

But:

cons alone is insufficient.

Observation:

With only cons,

- terminal algebra exists
- but is trivial (one-element type)

So we need more structure.

---

## 5. No junk and no confusion

### Surjectivity / no junk

Every point decomposes.

```text
forall z : I.
  exists d x.
    z = d :: x
```

Need constructor + destructor flavour.

Points still built by digits.

---

### Pointwise injectivity / no confusion

We do **not** assume full stream injectivity.

Instead we assume the two pointwise no-confusion principles:

```text
d :: x = d :: y
  -> x = y
```

and

```text
d :: x = e :: x
  -> d = e
```

They say:

- fixing the digit, cons is injective in the tail;
- fixing the tail, cons is injective in the digit.

But they do **not** say:

```text
d :: x = e :: y
  -> d = e and x = y
```

That stronger stream-like injectivity would be false.

Counterexample, informally:

```text
-1 :: (right boundary)
=
+1 :: (left boundary)
```

formally expressed by the boundary predicates.

If full injectivity held:

- recover head
- recover tail
- collapse back to streams

So:

> full injectivity is too strong, but pointwise no-confusion is valid.

---

## 6. Separation principles

Need controlled distinguishability.

We proceed in two steps:

1. boundary case
2. carry introduction and propagation

### Boundary case

We do **not** introduce infinite streams as objects.

Instead we introduce a predicate expressing
when an interval point coincides with a boundary value:

```text
_∞~_ : D -> I -> Prop
```

Intended semantics:

```text
d∞ ~ x
```

means

```text
[[x]] = d
```

So this is not a constant stream; it is a coinductively defined
boundary predicate.

The boundary Horn formula is:

```text
-1 :: x = 1 :: y
  ->
1∞ ~ x  and  (-1)∞ ~ y
```

The boundary predicate itself is defined by the destructor rule:

```text
d∞ ~ (e :: x)
  ->
e = d  and  d∞ ~ x
```

So an element is at the `d`-boundary only if every observed refinement
uses digit `d`.

Key point:

- no head/tail observation
- no infinite streams as data
- only boundary predicates defined coinductively

This expresses the exceptional boundary overlap without turning `1∞`
or `(-1)∞` into elements of `I`.

---

### Carry introduction

Now move from boundary behaviour to general overlap.

We use one carry relation:

```text
_ +1~ _ : I -> I -> Prop
```

Intended semantics:

```text
x +1~ y
```

means

```text
[[x]] + 1 = [[y]]
```

Carry is introduced from equalities of refinements:

```text
0 :: x = 1 :: y
  ->
y +1~ x
```

and

```text
0 :: x = (-1) :: y
  ->
x +1~ y
```

These are the two basic one-digit carry configurations.

---

### Carry propagation

The carry relation is then observed through refinements.

Horn formula:

```text
(d :: x) +1~ (e :: y)
  ->
(d = 1 + e  and  x +1~ y)
or
(d = 2 + e  and  x = y)
```

where equations on digits are interpreted arithmetically.

Key idea:

- the boundary predicate handles the extreme overlap;
- carry introduction extracts carries from one-digit equalities;
- carry propagation pushes carry information recursively;
- equality is constrained by Horn formulas.

This is the higher conductive move.


## 7. Semantic algebra

Now make the intended semantics explicit.

The semantic interval is:

```text
[-1,1]
```

with operation:

```text
d :: r
=
(d + r)/2
```

This gives a semantic interval algebra.

At this point an important question arises:

> Does the semantic interval satisfy our axioms?

Some are immediate:

- no confusion follows from injectivity of affine maps;
- boundary and carry rules can be checked arithmetically.

But surjectivity is more subtle.

Recall:

```text
forall r : [-1,1].
  exists d s.
    r = (d + s)/2
```

How do we choose the digit?

This uses **locatedness**.

Given

```text
r : [-1,1]
```

we can decide:

```text
r < 1/2
```

or

```text
-1/2 < r
```

These two open conditions cover the interval.

So:

- if `r < 1/2`, choose digit `-1`;
- if `-1/2 < r`, choose digit `+1`;
- in the overlap, either choice works;
- otherwise choose `0`.

The key point is:

> surjectivity depends on redundancy.

The thresholds

```text
-1/2
+1/2
```

leave an overlap region

```text
[-1/2,1/2]
```

where multiple digit choices are possible.

This redundancy is exactly what makes refinement, carries, and productive
arithmetic possible.

By terminality of `I`, we obtain the unique homomorphism

```text
q : [-1,1] -> I
```

satisfying:

```text
q ((d + r)/2)
=
d :: q(r)
```

This map sends a semantic real to its conductive representation.

Earlier we used informal notation

```text
[[ - ]] : I -> [-1,1]
```

for the inverse direction: interpreting a conductive real as an ordinary
real.

So the goal is to show that `q` and `[[ - ]]` are inverse maps.


## 8. Completeness sketch

Question:

Does terminal algebra contain all reals?

Need:

### Injectivity of q

If two conductive reals have same semantics

then they are equal.

Proof idea:

- define a suitable relation / predicate on semantic equality
- use the correspondence lemmas
- use Horn formulas and no-confusion
- conclude by induction on the proof structure

Important:

Injectivity of `q` is **not** proved by coinduction.

Here "coinduction" means the proof principle

```text
bisimilarity
  ->
equality
```

This principle does not enter the injectivity proof.

Instead, injectivity uses:

- correspondence lemmas
- Horn formulas
- no-confusion
- logical/algebraic reasoning.

Coinduction (in the bisimilarity-implies-equality sense) is expected to
be useful later for proving equational properties of conductive reals.

For example:

- defining midpoint or arithmetic operations
- proving their algebraic laws
- reasoning via suitable bisimulations.

---

### Surjectivity of q

Every real admits signed-digit expansion.

Digit-selection argument.

Question to mention:

Do we need countable choice?

Depends on construction.

Then obtain/justify the inverse interpretation

```text
[[ - ]] : I -> [-1,1]
```

with

```text
[[ q(r) ]] = r
```

and

```text
q([[x]]) = x
```

The second equation uses injectivity/completeness of the representation.

---

## 9. Reflection / big picture

Coinductive reals:

- terminal object
- category of interval algebras
- essentially algebraic theory
- Horn formulas (equations on left)

Philosophical contrast:

HITs:

- build equality upwards

Higher conductive types:

- separate by observations
- equality constrained coinductively

Final slogan:

> Instead of quotienting streams afterwards,
> we define the interval intrinsically
> as a terminal algebra with coinductive equality.
