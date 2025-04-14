form: FormGroup;

constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

ngOnInit(): void {
  const recipe = this.route.snapshot.data['recipe'];

  this.form = this.fb.group({
    name: [{ value: recipe.name, disabled: true }],
    prepTimeMinutes: [{ value: recipe.prepTimeMinutes, disabled: true }],
    cookTimeMinutes: [{ value: recipe.cookTimeMinutes, disabled: true }],
    cuisine: [{ value: recipe.cuisine, disabled: true }]
  });
}
