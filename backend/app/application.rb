class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/dogs/) && req.get?
      dogs = Dog.all 
      walkers = Walker.all
      return [200, { 'Content-Type' => 'application/json' }, [ {dogs: dogs, walkers: walkers}.to_json ]]

      elsif req.path.match(/dogs/) && req.post?
      data = JSON.parse req.body.read
      dog = Dog.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ {dog: dog}.to_json ]]

    elsif req.path.match(/dogs/) && req.patch?
      id = req.path.split("/dogs/").last
      dog = Dog.find(id)
      data = JSON.parse req.body.read
      puts data
      dog.update(data)
      return [200, { 'Content-Type' => 'application/json' }, [ {dog: dog}.to_json ]]
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
