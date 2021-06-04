puts "Clearing old data..."
Walker.delete_all
Dog.delete_all

puts "Seeding walkers..."
thomas = Walker.create(:name => "Thomas")
david = Walker.create(:name => "David")
jenny = Walker.create(:name => "Jenny")
becky = Walker.create(:name => "Becky")

puts "Seeding dogs..."
blue = Dog.create(:name => "Blue", :breed => "pug", :image => "https://www.thesprucepets.com/thmb/lqDqQz52oagIxea9ptgY1xzXQW4=/2121x1414/filters:fill(auto,1)/Pug-GettyImages-1140575734-5262294c43ff4ec993395d780fb0ee16.jpg", :walker_id => thomas.id)

dog = Dog.create(:name => "Dog", :breed => "husky", :image => "https://spiritdogtraining.com/wp-content/uploads/2021/03/miniature-husky.png", :walker_id => jenny.id)

marshmallow = Dog.create(:name => "Marshmallow", :breed => "goldendoodle", :image => "https://www.minigoldendoodles.org/wp-content/uploads/2018/02/Mini-Goldendoodle-Full-Grown-1.jpg", :walker_id => becky.id)

spork = Dog.create(:name => "Spork", :breed => "lab", :image => "https://www.ancarevet.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=-Z_ky5J6", :walker_id => david.id)

pablo = Dog.create(:name => "Pablo", :breed => "chihuahua", :image => "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/27134650/Chihuahua-standing-in-three-quarter-view.jpg", :walker_id => thomas.id)

shrek = Dog.create(:name => "Shrek", :breed => "husky", :image => "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg", :walker_id => jenny.id)

lola = Dog.create(:name => "Lola", :breed => "pug", :image => "https://i.guim.co.uk/img/media/504ea0b829df61cbc2ac689e07fbe5ff76cd4afe/2_391_2011_1207/master/2011.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f007109b888cf816882c007f311f085d", :walker_id => david.id)

puts "Done!"